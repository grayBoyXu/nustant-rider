<script>
	import { calcDate } from '@/utils/date.js'
	import { tokenTime } from '@/common/setting.js'
	export default {
		data() {
			return { refreshLock: false }
		},
		onLaunch: function() {
			this.refreshToken()
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			// 定时检测token
			refreshToken() {
				this.refreshTime = setInterval(() => {
					const token = uni.getStorageSync('token')
					const date = calcDate(token.datetime, new Date().getTime())
					if (!date) return
					if (date.seconds >= tokenTime && !this.refreshLock) {
						this.refreshLock = true
						this.$u.api
							.refreshToken(token.content, '000000')
							.then(res => {
								this.$u.func
									.refreshToken(res)
									.then(() => {
										this.refreshLock = false
									})
									.catch(() => {
										this.refreshLock = false
									})
							})
							.catch(() => {
								this.refreshLock = false
							})
					}
				}, 30000)
			}
		}
	}
</script>
<style lang="scss">
	/*uview全局样式*/
	@import 'uview-ui/index.scss';
	/*app全局样式*/
	@import 'static/style/app.scss';

	// 修改checkbox样式
	checkbox.curdCheck .wx-checkbox-input,
	checkbox.curdCheck .uni-checkbox-input {
		border-radius: 50% !important;
		border-color: #c8c9cc !important;
		color: #5f88ff !important;
	}

	checkbox.curdCheck .wx-checkbox-input-checked,
	checkbox.curdCheck .uni-checkbox-input-checked {
		// background-color: #5f88ff;
		color: #5f88ff !important;
		border-color: #5f88ff !important;
	}

	.uni-picker-container,
	.wx-picker-container {
		z-index: 10074;
	}

	uni-modal {
		z-index: 19999 !important;
	}
</style>

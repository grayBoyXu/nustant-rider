<template>
	<view class="container">
		<!-- 头部 start -->
		<view class="head">
			<u-navbar :is-fixed="false" :border-bottom="false" :is-back="false" title=""
				:background="{ background: 'linear-gradient(90deg, #69b0ff, #5f88ff)' }"
				title-color="#fff">
				<view class="nav-wrap">
					<picker mode="selector" :range="positionArr" range-key="name" @change="changePicker"
						class="picker-box">
						{{ position }}
						<u-icon name="arrow-down" class="arrow" size="18" color="#C9C9C9"></u-icon>
					</picker>
					<image src="https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/rider.png" class="rider" mode="widthFix" v-if="!focus"></image>

					<view class="search-input" v-else>
						<u-search height="50" placeholder="关键字" @blur="handleSearchBlur" :show-action="false"
							v-model="keyword"></u-search>
					</view>

					<view class="tool">
						<image src="https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/search.png" class="icon search-icon" mode="widthFix"
							@click="handleFocus" v-if="!focus"></image>
						<image src="https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/message.png" class="icon message-icon" mode="widthFix"></image>
						<image src="https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/qr.png" class="icon qr-icon" mode="widthFix"></image>
					</view>
				</view>
			</u-navbar>
			<view class="head-bg"></view>
			<swiper class="swiper-box" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item, index) in bannerList" :key="index">
					<navigator :url="item.url" hover-class="none" class="swiper-item">
						<image :src="item.img" class="banner"></image>
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		<!-- 头部 end -->

		<!-- 头部按钮 start -->
		<view class="nav">
			<u-grid :col="5" :border="false">
				<u-grid-item bg-color="transparent" v-for="(item, index) in navButton" :key="index">
					<navigator :url="item.url" hover-class="none" class="nav-item">
						<image :src="item.img" mode="widthFix" class="nav-item-img"></image>
						<view class="nav-item-name">{{ item.name }}</view>
					</navigator>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 头部按钮 end -->

		<!-- 公告 start -->
		<view class="notice-box">
			<image src="https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/notice.png" class="img" mode="widthFix"></image>
			<view class="notice-info">
				<navigator hover-class="none" class="notice-cell" v-for="(item, index) in noticeList" :key="index">
					<image :src="item.img" class="icon" mode="widthFix"></image>
					<view class="text">{{item.title}}</view>
					<u-icon name="arrow-right" size="12" color="#C9C9C9"></u-icon>
				</navigator>
			</view>
		</view>
		<!-- 公告 end -->

		<!-- 服务按钮 start -->
		<view class="service-box">
			<u-grid :col="4" :border="false">
				<u-grid-item bg-color="transparent" v-for="(item, index) in serviceButton" :key="index">
					<navigator :url="item.url" hover-class="none" class="service-item">
						<image :src="item.img" mode="widthFix" class="img"></image>
						<view class="name">{{ item.name }}</view>
					</navigator>
				</u-grid-item>
				<u-grid-item bg-color="transparent" key="8">
					<navigator url="/pages/service/service" hover-class="none" class="service-item">
						<image src="https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/s8.png" mode="widthFix" class="img"></image>
						<view class="name">更多</view>
					</navigator>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 服务按钮 end -->

		<!-- 新闻模块 start -->
		<view class="news">
			<navigator hover-class="none" url="/pages/news/list" class="cell">
				<view class="ctitle">新闻</view>
				<view class="more">
					更多
					<u-icon name="arrow-right" color="#A6ABB5" size="16"></u-icon>
				</view>
			</navigator>

			<view class="news-list">
				<navigator url="/pages/news/detail" hover-class="none" class="news-item"
					v-for="(item, index) in newsList" :key="index">
					<view class="left">
						<view class="info">
							[中国空间站] 天舟五号创造多个航天新纪录
						</view>
						<view class="date">
							<image src="https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/date.png" class="icon" mode=""></image>
							2022.11.12
						</view>
					</view>
					<image src="" mode="" class="img"></image>
				</navigator>
				<u-loadmore :status="status" />
			</view>
			<!-- 新闻模块 end -->
		</view>
	</view>
</template>

<script>
	import {
		fakePosition,
		fakeBannerList,
		fakeNoticeList,
		fakeNavButton,
		fakeServiceButton
	} from '@/api/mock/home.js'
	export default {
		data() {
			return {
				position: '',
				positionArr: [],
				status: 'loadmore',
				list: 15,
				page: 0,
				keyword: '',
				focus: false,
				bannerList: [],
				noticeList: [],
				newsList: [{}, {}],
				navButton: [],
				serviceButton: []
			}
		},
		onLoad() {
			// 后续将改为与后端联动
			// 加载banner数据
			fakePosition().then(data => {
				this.position = data.position
				this.positionArr = data.positionArr
			})
			// 加载banner数据
			fakeBannerList().then(data => {
				this.bannerList = data
			})
			// 加载通知公告数据
			fakeNoticeList().then(data => {
				this.noticeList = data
			})
			// 加载顶部按钮数据
			fakeNavButton().then(data => {
				this.navButton = data
			})
			// 加载服务按钮数据
			fakeServiceButton().then(data => {
				this.serviceButton = data
			})
		},
		onReachBottom() {
			// 后续将改为与后端联动
			if (this.page >= 3) return
			this.status = 'loading'
			this.page = ++this.page
			setTimeout(() => {
				this.list += 10
				if (this.page >= 3) this.status = 'nomore'
				else this.status = 'loading'
				this.newsList.push(...[{}, {}])
			}, 2000)
		},
		methods: {
			changePicker(e) {
				console.log(this.pickerArr[e.detail.value].name)
				this.position = this.pickerArr[e.detail.value].name
			},
			handleFocus() {
				this.focus = !this.focus
			},
			handleSearchBlur() {
				this.focus = false
			}
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #f7f7f7;
		min-height: 100vh;
		overflow: hidden;
	}

	.head {
		position: relative;
		top: 0;
		left: 0;
		z-index: 1;
	}

	.head-bg {
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: -1;
		width: 750rpx;
		height: 270rpx;
		background: linear-gradient(90deg, #69b0ff, #5f88ff);
	}

	.nav-wrap {
		width: 100%;
		padding: 0 22rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.picker-box {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			font-size: 32rpx;
			font-family: Microsoft YaHei;
			font-weight: bold;
			color: #ffffff;

			.arrow {
				margin-left: 10rpx;
			}
		}

		.rider {
			flex-shrink: 0;
			width: 131rpx;
			height: auto;
		}

		.search-input {
			width: 300rpx;
			height: 50rpx;
		}

		.tool {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: flex-end;

			.icon {
				height: auto;
			}

			.search-icon {
				width: 40rpx;
				margin-right: 34rpx;
			}

			.message-icon {
				width: 32rpx;
				margin-right: 27rpx;
			}

			.qr-icon {
				width: 37rpx;
			}
		}
	}

	.swiper-box {
		margin: 50rpx auto 0;
		width: 710rpx;
		height: 253rpx;

		.swiper-item {
			width: 100%;
			height: 100%;

			.banner {
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}
		}
	}

	.nav {
		margin: 0rpx 0;
		box-sizing: border-box;
		padding: 0 10rpx;

		&-item {
			width: 100%;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			height: 130rpx;

			&-img {
				width: 80rpx;
				height: 80rpx;
			}

			&-name {
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #585b61;
			}
		}
	}

	.notice-box {
		display: flex;
		align-items: center;
		background: #ffffff;
		border-radius: 20px 20px 20px 20px;
		margin: 0 20rpx;
		padding: 30rpx 20rpx;

		.img {
			width: 75rpx;
			height: auto;
			margin-right: 36rpx;
			margin-left: 10rpx;
		}

		.notice-info {
			flex: 1;

			.notice-cell:first-of-type {
				margin-bottom: 15rpx;
			}
		}

		.notice-cell {
			display: flex;
			align-items: center;
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #585b61;

			.icon {
				width: 63rpx;
				margin-right: 18rpx;
			}

			.text {
				flex: 1;
				min-width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
		}
	}

	.service-box {
		background: #ffffff;
		border-radius: 20px 20px 20px 20px;
		margin: 30rpx 20rpx 0;
		padding: 0rpx 20rpx;

		.service-item {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 120rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #585b61;

			.img {
				width: 70rpx;
				height: auto;
			}
		}
	}

	.news {
		background: #ffffff;
		border-radius: 20px 20px 20px 20px;
		margin: 30rpx 20rpx 60rpx;
		padding: 30rpx 20rpx;

		.cell {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.ctitle {
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #585b61;
			}

			.more {
				display: flex;
				align-items: center;
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #a6abb5;
			}
		}

		.news-list {
			margin-top: 30rpx;

			.news-item {
				&:not(:last-of-type) {
					padding: 0 0 30rpx;
					margin-bottom: 30rpx;
					border-bottom: 1px solid #eeeeee;
				}

				display: flex;
				align-items: center;
				justify-content: space-between;

				.left {
					flex: 1;
					height: 160rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					.info {
						min-width: 0;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;

						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #585b61;
						line-height: 36rpx;
					}

					.date {
						display: flex;
						align-items: center;

						.icon {
							width: 21rpx;
							height: 21rpx;
							margin-right: 9rpx;
						}

						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #a6abb5;
					}
				}

				.img {
					flex-shrink: 0;
					width: 252rpx;
					height: 160rpx;
					border-radius: 20rpx;
					background-color: #82848a;
				}
			}
		}
	}
</style>

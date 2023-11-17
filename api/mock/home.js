// 获取部门数据
export function fakePosition() {
	return new Promise((resolute, reject) => {
		try {
			const detail = {
				position: "研发部",
				positionArr: ['研发部', '产品部']
			}
			resolute(detail);
		} catch (e) {
			//模拟接口请求失败
			reject(e);
		}
	})
}

// 获取公告数据
export function fakeBannerList() {
	return new Promise((resolute, reject) => {
		try {
			const list = [{
				id: '1',
				img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/banner1.png',
				url: 'ui.nustantai.com'
			}, {
				id: '2',
				img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/banner2.png',
				url: 'ui.nustantai.com'
			}, {
				id: '3',
				img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/banner3.png',
				url: 'https://sns.nustantai.vip'
			}];
			resolute(list);
		} catch (e) {
			//模拟接口请求失败
			reject(e);
		}
	})
}

// 获取公告数据
export function fakeNoticeList() {
	return new Promise((resolute, reject) => {
		try {
			const list = [{
				id: '1',
				img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/focus.png',
				title: '天舟五号创造多个航天新纪录'
			}, {
				id: '2',
				img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/service.png',
				title: '全国累计报告接种新冠疫苗超9亿剂次'
			}];
			resolute(list);
		} catch (e) {
			//模拟接口请求失败
			reject(e);
		}
	})
}

// 获取顶部按钮数据
export function fakeNavButton() {
	return new Promise((resolute, reject) => {
		try {
			const list = [{
					name: '公积金',
					img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/n1.png',
					url: ''
				},
				{
					name: '社保',
					img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/n2.png',
					url: ''
				},
				{
					name: '医保',
					img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/n3.png',
					url: ''
				},
				{
					name: '企业',
					img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/n4.png',
					url: ''
				},
				{
					name: '教育',
					img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/n5.png',
					url: ''
				}
			];
			resolute(list);
		} catch (e) {
			//模拟接口请求失败
			reject(e);
		}
	})
}

// 获取服务按钮数据
export function fakeServiceButton() {
	return new Promise((resolute, reject) => {
		try {
			const list = [{
					name: '工作流',
					img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/s1.png',
					url: '/pages/plugin/workflow/pages/workbench/index'
				},
				{
					name: '工商年报',
					img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/s2.png',
					url: ''
				},
				{
					name: '税务登记',
					img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/s3.png',
					url: ''
				},
				{
					name: '健康码',
					img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/s4.png',
					url: ''
				},
				{
					name: '便民服务',
					img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/s5.png',
					url: ''
				},
				{
					name: '通办大厅',
					img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/s6.png',
					url: ''
				},
				{
					name: '智能问答',
					img: 'https://minio.nustantai.com/nustant-dp/nustant-rider-ui/images/home/s7.png',
					url: ''
				}
			];
			resolute(list);
		} catch (e) {
			//模拟接口请求失败
			reject(e);
		}
	})
}

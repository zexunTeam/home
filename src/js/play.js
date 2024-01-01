var ap = new APlayer
({
    element: document.getElementById('aplayer'),
    showlrc: true,
    fixed: true,
    lrcType: 2,
    audio: [{
        title: 'Payphone',
        author: 'Maroon 5',
        url: '/src/music/Payphone.m4a',
        pic: 'http://p2.music.126.net/6mQbFNWxHHIUPmfZs7hwcg==/2535473813685128.jpg?param=130y130',
        theme: '#46718b',
    },{
        title: '兰亭序',
        author: '周杰伦',
        url: '/src/music/兰亭序-周杰伦.mp3',
        pic: 'https://img4.kuwo.cn/star/albumcover/120/72/44/3648126291.jpg',
        theme: '#ebd0c2',
    },{
        title: '稻香',
        author: '周杰伦',
        url: '/src/music/稻香.mp3',
        pic: 'https://img4.kuwo.cn/star/albumcover/120/72/44/3648126291.jpg',
        theme: '#ebd0c2',
    }]
});
ap.init();
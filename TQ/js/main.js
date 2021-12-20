

new Vue({
    el: "#app",
    data: {
        city: "汕尾",
        forecastList: [],
        hotCitys: ["北京", "上海", "广州", "深圳", "杭州"]
    },
    methods: {
        queryWeather() {
            this.forecastList = [];
            axios
                .get(`http://wthrcdn.etouch.cn/weather_mini?city=${this.city}`)
                .then(res => {
                    this.forecastList = res.data.data.forecast;
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => { });
        },
        clickSearch(city) {
            this.city = city;
            this.queryWeather();
        }
    }
});

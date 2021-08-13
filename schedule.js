//說明
//Cron Syntax
//# ┌────────────── second(optional)
//# │ ┌──────────── minute
//# │ │ ┌────────── hour
//# │ │ │ ┌──────── day of month
//# │ │ │ │ ┌────── month
//# │ │ │ │ │ ┌──── day of week
//# │ │ │ │ │ │
//# │ │ │ │ │ │
//# *  *  *  *  *  *

//Allowed values
//field 	value
//second 	0- 59
//minute 	0- 59
//hour 	    0- 23
//day of month 	1- 31
//month 	1- 12(or names)
//day of week 	0- 7(or names, 0 or 7 are sunday)
exports.getConfig = function () {    
    var config =
        [
            {
                //每隔一分鐘
                corn: '*/1 * * * *',
                apiurl: [
                    "https://tw.news.yahoo.com/快新聞-國內首驗出b-1-621哥倫比亞變異株-在美打2劑bnt返台仍確診-064720173.html"               
                ]
            },
            {
                //凌晨一點
                corn: '0 2 * * *',
                apiurl: [
                    "https://xxxx.stust.edu.tw/xxxx/ashx/xxxx.ashx",
		            "http://xxxx.stust.edu.tw/xxxx/ashx/xxxx.ashx"              
                ]
            },    
        ];
    return config;
}
exports.hello = function () {
    return "hello";
}

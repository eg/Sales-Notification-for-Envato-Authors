//////////////////////////////////////////////////////////////////////////////////////////
// ---------------------------------------------------------------------------------------
// Create a personal token at https://build.envato.com/my-apps 
// Permission needed - "View your items sales history"
// ---------------------------------------------------------------------------------------
const apikey = "yourPersonalTokenHere"; 
const checkEverySeconds = 240 // seconds // min : 90
const notificationSound = false; // true or false
const notificationSource = "sound/notification.mp3"; // notification sound
//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
// Pull last sales
function getSales() {
    $.ajax({
        url: "https://api.envato.com/v3/market/author/sales",
        type: "GET",
        beforeSend: function (xhr, settings) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + apikey);
        },
        success: function (data) {
            // data
            var lastSale = data[0];
            var time = lastSale.sold_at
            var itemName = lastSale.item.name;
            var amount = lastSale.amount;
            var itemThumbnail = lastSale.item.previews.icon_preview.icon_url;
            var numberOfSale = lastSale.item.number_of_sales;

            // get last id
            chrome.storage.sync.get(['lastSaleID'], function (result) {
                var lastSaleID = result.lastSaleID;

                // if last id same with last sales time
                if (lastSaleID === time) {
                    // same id
                }
                else {
                    chrome.storage.sync.set({ lastSaleID: time });
                    // notification settings for new sale
                    var NotifyOptions = {
                        type: 'basic',
                        iconUrl: itemThumbnail,
                        title: 'New Sale - $' + amount,
                        message: "(" + numberOfSale + ") " + itemName
                    }
                    chrome.notifications.create(time, NotifyOptions, function () {
                        // play notification sound
                        if (notificationSound) {
                            var obj = document.createElement("audio");
                            obj.src = notificationSource;
                            obj.play();
                        }
                    })
                }

            });

        },
        error: function (err) {
            console.log(err);
        },
    });
}
//////////////////////////////////////////////////////////////////////////////////////////
// Run when open chrome
getSales();
//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
// Get current time
var time = new Date();
var nowTime = time.getTime();
var value = nowTime;
// Set current time
chrome.storage.sync.set({ SaleslastReadTime: value });
//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
// Check if Readtime exist
setInterval(() => {
    chrome.storage.sync.get(['SaleslastReadTime'], function (result) {
        var time = new Date();
        var nowTime = time.getTime();
        var lastRead = parseInt(result.SaleslastReadTime) + (checkEverySeconds * 1000); // 5 seconds
        if (lastRead < nowTime) {
            getSales();
            chrome.storage.sync.set({ SaleslastReadTime: nowTime });
        }
    });
}, 1000);
//////////////////////////////////////////////////////////////////////////////////////////
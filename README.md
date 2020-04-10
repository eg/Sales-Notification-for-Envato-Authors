# How it works?
This chrome extension is basically notify you when you sell an item on Envato Marketplaces.

# Installation Instructions
<ol>
<li>Download the extension <a href='https://github.com/eg/Sales-Notification-for-Envato-Authors/archive/master.zip'>here</a> and unzip to safe place you won't delete it.</li>
<li>Create a personal token <a href='https://build.envato.com/create-token' target='_blank'>here</a> with View <b>your items sales history</b> permission. And copy your token key.</li>
<li>Open <b>background.js</b>, you will see the apikey variable at top. <br> <code>const apikey = "yourPersonalTokenHere"; </code>. <br>Paste your token key here.</li>
<li>Open Chrome and type <code>chrome://extensions/</code> into address bar then enter.</li>
<li><b>Enable</b> Developer mode</li>
<li>Click to <b>Load unpacked</b> button and select the extension folder.</li>
<li>Done!</li>
</ol>

# Settings
<table>
    <tr>
        <td>apikey</td>
        <td>Your personal token</td>
    </tr>
    <tr>
        <td>checkEverySeconds</td>
        <td>Check every x seconds</td>
    </tr>
    <tr>
        <td>notificationSound</td>
        <td>true / false</td>
    </tr>
    <tr>
        <td>notificationSource</td>
        <td>Source of notification audio file.</td>
    </tr>
</table>

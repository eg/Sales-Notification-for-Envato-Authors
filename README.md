# About

This chrome extension is basically notify you when you sell an item on Envato Marketplaces.

<img src='https://github.com/eg/Sales-Notification-for-Envato-Authors/blob/master/assets/img/preview.png?raw=true' alt='preview'>

# Installation Instructions
<ol>
<li>Download the extension <a href='https://github.com/eg/Sales-Notification-for-Envato-Authors/archive/master.zip'>here</a> and unzip to safe place you won't delete it.</li>
<li>Create a personal token <a href='https://build.envato.com/create-token' target='_blank'>here</a> with <b>View your items sales history</b> permission. And copy your token key.</li>
<li>Open <b>background.js</b>, you will see the apikey variable at top. <br> <code>const apikey = "yourPersonalTokenHere"; </code>. <br>Paste your token key here.</li>
<li>Open Chrome and type <code>chrome://extensions/</code> into address bar then enter.</li>
<li><b>Enable</b> Developer mode</li>
<li>Click to <b>Load unpacked</b> button and select the extension folder.</li>
<li>Done! </li>
</ol>
<pre>If the installation was success, you will get a notification of your last sale.</pre>

# Settings
<table>
    <tr>
        <td><b>apikey</b></td>
        <td>Your personal token</td>
    </tr>
    <tr>
        <td><b>checkEverySeconds</b></td>
        <td>Check every x seconds</td>
    </tr>
    <tr>
        <td><b>notificationSound</b></td>
        <td>true / false</td>
    </tr>
    <tr>
        <td><b>notificationSource</b></td>
        <td>Source of notification audio file.</td>
    </tr>
</table>

# PayPal Take Home

Hey! Here is the repo for the paypal take home project I was given. I worked hard to make it as polished as possible in the time provided — even trying to capture the overall aesthetic of a PayPal application. The application was created with **mobile** in mind, but given more time I would have built out breakpoints for other sizes as well. As a result, the application is best viewed in Chrome with a screen size for iPhone 6.

I've created some tools to get the application up and running. Below is a list of instructions to get it running on your machine. Let me know if something is broken at ethan@ethangodt.com.

- Clone repo & `cd` to project root
- `npm install`
- `bower install`
- Run `mysql.server start`
- Run `mysql -u <username> -p`
  - `mysql> CREATE DATABASE paypal_stakehome`
  - `mysql> source server/schema.sql`
- Update config file with your username and password to MySQL
- `npm start`

</br>

<img src="http://i.imgur.com/Pl4TxPG.png">
<img src="http://i.imgur.com/T6sonwg.png">
<img src="http://i.imgur.com/q8VJP2i.png">
<img src="http://i.imgur.com/BgUXyyE.png">
<img src="http://i.imgur.com/Bq9oUfF.png">

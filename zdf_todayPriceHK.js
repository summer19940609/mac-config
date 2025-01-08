const axios = require('axios');
const notify = require('./sendNotify');

const getGoldPrice = async () => {
  try {
    const timestamp = Date.now();
    const response = await axios.get(`https://api2.ctfmall.com/gateway//ctfmall-common2-server/common/todayGoldPrice?timestamp=${timestamp}`);
    
    const today = new Date().toISOString().split('T')[0]; // Gets YYYY-MM-DD format
    const todayPriceHK = response.data.data.todayPriceHK;
    console.log(`${today} Today's HK Gold Price:`, todayPriceHK);    

    const str = `${today}周大福今日金价：${todayPriceHK} 元/克`
    await notify.sendNotify(str, '');

  } catch (error) {
    console.error('Error fetching gold price:', error.message);
    throw error;
  }
}

getGoldPrice();

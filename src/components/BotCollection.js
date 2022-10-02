import React from "react";
import BotCard from "./BotCard";

function BotCollection({addABot, botData, dischargeBot}) {
  // Your code here //transferred to App.js
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*mapping through the bots to return a single bot-card for each bot*/
        botData.map(bot => {
          return (
            <BotCard 
              key={bot.id}
              bot={bot} 
              handleBots={addABot}
              dischargeBot={dischargeBot}
            />
          )
        })
        }
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;

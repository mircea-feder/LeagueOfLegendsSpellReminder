# League of Legends - Spell Reminder

https://user-images.githubusercontent.com/64581539/207162320-84daeb0c-110b-4bf7-88dd-5675632a2cf0.mp4
![Screenshot_1](https://user-images.githubusercontent.com/64581539/207162787-3292aaa8-091c-439f-8732-beecb0622f69.png)

### Description ###
LoL-SR is a desktop application that loads a UI in the top right corner of the screen containing 
the enemy champions and their summoner spells. A user can click a spell to start a timer. Players 
who use this application can manage their resources better, by knowing how to engaged an enemy 
based on their available summoner spells.\

The application features automatic event detection. Every 6 seconds, a request is made to the Riot
API to check for various events, such as **game started** or **game ended**. This allows a user to
turn on the application and forget about it. The UI will only be displayed if a match is taking 
place. After the match ended, the UI is hidden until another match starts.\\

Similary, if an enemy champion has **Unsealed Spellbook**, the application will check every 6 seconds
if the enemy champion changed summoner spells.

### Disclaimer ###

I will launch the application as soon as Riot will offer me a produuction key, so far they did not 
respond to any of my emails.

### Future plans ###

I want friends to be able to create rooms and share information. For example, the midlaner and the 
adc are connected to a room, if the adc clicks the *Flash* on the enemy adc, that should also be 
visible for the midlaner.

### Tech stack ###

&emsp;• **TypeScript**
&emsp;• **Electron**
&emsp;• **ReactJS**
&emsp;• **Node & Express**
&emsp;• **Riot API**

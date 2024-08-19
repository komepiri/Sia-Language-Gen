const { Client, GatewayIntentBits } = require('discord.js');
const { exec } = require('child_process');

// Discord Botの設定
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const TOKEN = 'YOUR_BOT_TOKEN'; // ここにDiscord Botのトークンを入力

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', message => {
    // Botが送信したメッセージには反応しないようにする
    if (message.author.bot) return;

    // !gen コマンドを検知
    if (message.content.startsWith('!gen')) {
        // 実行するコマンド
        const command = 'python3 gen.py'; // ここに実行したいBashコマンドを記述

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                message.reply(`Error: ${error.message}`);
                return;
            }

            if (stderr) {
                console.error(`stderr: ${stderr}`);
                message.reply(`stderr: ${stderr}`);
                return;
            }

            // コマンドの出力をメッセージとして送信
            message.reply(`Command output:\n${stdout}`);
        });
    }
});

client.login(TOKEN);

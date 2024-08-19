const { Client, GatewayIntentBits } = require('discord.js');
const { exec } = require('child_process');

// Discord Botの設定
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const TOKEN = process.env['DISCORD-BOT-TOKEN'] // ここにDiscord Botのトークンを入力

client.once('ready', async () => {
    console.log('Bot is ready!');
        const data = [{
        name: "gen",
        description: "生成します",
    }];
    await client.application.commands.set(data);
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
            message.reply(`${stdout}`);
            console.log(`${stdout}`);
        });
    }
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    if (interaction.commandName === 'gen') {
                // 実行するコマンド
        const command = 'python3 gen.py'; // ここに実行したいBashコマンドを記述

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                interaction.reply(`Error: ${error.message}`);
                return;
            }

            if (stderr) {
                console.error(`Error:${stderr}`);
                interaction.reply(`Error:${stderr}`);
                return;
            }

            // コマンドの出力をメッセージとして送信
            interaction.reply(`${stdout}`);
            console.log(`${stdout}`);
        });
    }
});

client.login(TOKEN);

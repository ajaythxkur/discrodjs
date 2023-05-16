import { REST } from '@discordjs/rest';
import { WebSocketManager } from '@discordjs/ws';
import { GatewayDispatchEvents, GatewayIntentBits, InteractionType, MessageFlags, Client, Routes } from '@discordjs/core';


const token = "YOUR BOT TOKEN HERE";

const rest = new REST({ version: '10' }).setToken(token);

const gateway = new WebSocketManager({
    token,
    intents: GatewayIntentBits.GuildMessages | GatewayIntentBits.MessageContent,
    rest,
});
const client_id = "1106092142495023134";
const guild_id = "1106080533651394580";

import boopCommand from "./commands/boop.js";
import roleCommand from './commands/roles.js';
import channelCommand from './commands/channels.js';
import userCommand from './commands/user.js';
import banCommand from './commands/ban.js';
import { ActionRowBuilder, SelectMenuBuilder } from '@discordjs/builders';
async function main() {
    const commands = [boopCommand.toJSON(), roleCommand.toJSON(), userCommand.toJSON(), channelCommand.toJSON(), banCommand.toJSON()]
    try {
        await rest.put(Routes.applicationGuildCommands(client_id, guild_id), {
            body: commands
        })
    } catch (err) {
        console.log(err)
    }
}
main();

const client = new Client({ rest, gateway });
client.on(GatewayDispatchEvents.InteractionCreate, async ({ data: interaction, api }) => {
    if (interaction.type !== InteractionType.ApplicationCommand) {
        return
    }
    if (interaction.data.name == 'boop') {
        let actionRowComponent = new ActionRowBuilder().setComponents(
            new SelectMenuBuilder()
                .setCustomId("custom_select")
                .setOptions([{ label: "Cake", value: 'cake' }, { label: "Mouse", value: 'mouse' }])
        )

        await api.interactions.reply(interaction.id, interaction.token, {
            content: "beep",
            flags: MessageFlags.Ephemeral,
            components: [actionRowComponent.toJSON()]
        });

        InteractionType.
            return;
    }
    if (interaction.data.name == 'addrole') {
        await api.interactions.reply(interaction.id, interaction.token, { content: "who to add role", flags: MessageFlags.Ephemeral });
        return;
    }
});
client.once(GatewayDispatchEvents.Ready, () => console.log('Ready!'));
gateway.connect();

client.on(GatewayDispatchEvents.MessageCreate, (message) => {
    console.log(message.data.content)
    console.log(message.data.author.discriminator);
})



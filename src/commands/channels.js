import { SlashCommandBuilder } from "@discordjs/builders";

const channelCommand = new SlashCommandBuilder()
    .setName('channels')
    .setDescription('channel command')
    .addChannelOption((option) =>
        option
            .setName("channels")
            .setDescription("channel description")
            .setRequired(true)
    )
    .addBooleanOption((option) =>
        option
            .setName("deletemsgs")
            .setDescription("Delete the messages")
            .setRequired(true)
    )

    .addIntegerOption((option) =>
        option
            .setName("age")
            .setDescription("Enter the age")
    )
    .addAttachmentOption((option) =>
        option
            .setName("attatchment")
            .setDescription("Attatchment option")
    );




export default channelCommand;
import { SlashCommandBuilder } from "@discordjs/builders";

const userCommand = new SlashCommandBuilder()
    .setName('users')
    .setDescription('User command')
    .addUserOption((option) =>
        option
            .setName("user")
            .setDescription("user")
    );




export default userCommand;
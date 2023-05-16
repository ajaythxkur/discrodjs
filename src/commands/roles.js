import { SlashCommandBuilder } from "@discordjs/builders";

const roleCommand = new SlashCommandBuilder()
    .setName('addrole')
    .setDescription('Add a role')
    .addRoleOption((option) =>
        option
            .setName("newrole")
            .setDescription("Adds a new role")
    );




export default roleCommand;
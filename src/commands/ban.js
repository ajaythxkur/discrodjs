import { SlashCommandBuilder } from "@discordjs/builders";

const banCommand = new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a user from server')

    .addSubcommandGroup((group) =>
        group
            .setName('okcommands')
            .setDescription('Shows information about points in the guild')
            .addSubcommand((subcommand) =>
                subcommand
                    .setName("temp")
                    .setDescription("Temporary ban a user").addUserOption((option) =>
                        option
                            .setName("user")
                            .setDescription("user")
                    )
            )
            .addSubcommand((subcommand) =>
                subcommand
                    .setName("perma")
                    .setDescription("Permanently ban a user").addUserOption((option) =>
                        option
                            .setName("user")
                            .setDescription("user")
                    )
            )
    );





export default banCommand;
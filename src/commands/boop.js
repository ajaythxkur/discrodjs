import { SlashCommandBuilder } from "@discordjs/builders";

const boopCommand = new SlashCommandBuilder()
    .setName('boop')
    .setDescription('Boops the specified user, as many times as you want')
    .addUserOption((option) => option.setName('user').setDescription('The user to boop').setRequired(true))


    .addStringOption((option) =>
        option
            .setName('action')
            .setDescription('What action should be taken with the users points?')
            .addChoices(
                { name: 'Add points', value: 'add' },
                { name: 'Remove points', value: 'remove' },
                { name: 'Reset points', value: 'reset' },
            )
            .setRequired(true),
    )

    // Adds an integer option
    .addIntegerOption((option) =>
        option.setName('boop_amount').setDescription('How many times should the user be booped (defaults to 1)'),
    )

    // Supports choices too!
    .addIntegerOption((option) =>
        option
            .setName('boop_reminder')
            .setDescription('How often should we remind you to boop the user')
            .addChoices({ name: 'Every day', value: 1 }, { name: 'Weekly', value: 7 }),
    );


export default boopCommand;
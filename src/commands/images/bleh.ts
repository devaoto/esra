import { Command, CommandContext, Declare, Options, createUserOption } from "seyfert";
import { handleReaction } from "src/helpers/dynamic";

const options = {
    target: createUserOption({
        description: "The user to send the reaction to",
        required: false
    })
};

@Declare({
    name: "bleh",
    description: "Send a bleh gif to someone"
})
@Options(options)
export default class BlehCommand extends Command {
    public async run(ctx: CommandContext<typeof options>): Promise<void> {
        await handleReaction(ctx, "bleh");
    }
}
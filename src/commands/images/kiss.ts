import { Command, CommandContext, Declare, Options, createUserOption } from "seyfert";
import { handleReaction } from "../../helpers/dynamic";

const options = {
    target: createUserOption({
        description: "The user to send the reaction to",
        required: false
    })
};

@Declare({
    name: "kiss",
    description: "Send a kiss gif to someone"
})
@Options(options)
export default class KissCommand extends Command {
    public override async run(ctx: CommandContext<typeof options>): Promise<void> {
        await handleReaction(ctx, "kiss");
    }
}

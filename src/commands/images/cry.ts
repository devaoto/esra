import { Command, CommandContext, Declare, Options, createUserOption } from "seyfert";
import { handleReaction } from "../../helpers/dynamic";

const options = {
    target: createUserOption({
        description: "The user to send the reaction to",
        required: false
    })
};

@Declare({
    name: "cry",
    description: "Cry."
})
@Options(options)
export default class CryCommand extends Command {
    public override async run(ctx: CommandContext<typeof options>): Promise<void> {
        await handleReaction(ctx, "cry");
    }
}

import Player from "../../../src/Player";
declare module "godot" {
    interface ResourceTypes {
        "res://scenes/player.tscn": PackedScene<Player>;
    }
}

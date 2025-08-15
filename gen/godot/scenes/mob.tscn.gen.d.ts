import Mob from "../../../src/Mob";
declare module "godot" {
    interface ResourceTypes {
        "res://scenes/mob.tscn": PackedScene<Mob>;
    }
}

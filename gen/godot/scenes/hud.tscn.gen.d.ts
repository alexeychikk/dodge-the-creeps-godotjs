import Hud from "../../../src/Hud";
declare module "godot" {
    interface ResourceTypes {
        "res://scenes/hud.tscn": PackedScene<Hud>;
    }
}

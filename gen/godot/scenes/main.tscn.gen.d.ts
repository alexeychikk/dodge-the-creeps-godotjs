import Main from "../../../src/Main";
declare module "godot" {
    interface ResourceTypes {
        "res://scenes/main.tscn": PackedScene<Main>;
    }
}

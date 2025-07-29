declare module "godot" {
    interface SceneNodes {
        "scenes/hud.tscn": {
            ScoreLabel: Label<{}>,
            Message: Label<{}>,
            StartButton: Button<{}>,
            MessageTimer: Timer<{}>,
        },
    }
}

declare module "godot" {
    interface SceneNodes {
        "scenes/main.tscn": {
            ColorRect: ColorRect<{}>,
            Player: Area2D<
                {
                    AnimatedSprite2D: AnimatedSprite2D<{}>,
                    CollisionShape2D: CollisionShape2D<{}>,
                }
            >,
            MobTimer: Timer<{}>,
            ScoreTimer: Timer<{}>,
            StartTimer: Timer<{}>,
            StartPosition: Marker2D<{}>,
            MobPath: Path2D<
                {
                    MobSpawnLocation: PathFollow2D<{}>,
                }
            >,
            Hud: CanvasLayer<
                {
                    ScoreLabel: Label<{}>,
                    Message: Label<{}>,
                    StartButton: Button<{}>,
                    MessageTimer: Timer<{}>,
                }
            >,
            Music: AudioStreamPlayer2D<{}>,
            DeathSound: AudioStreamPlayer2D<{}>,
        },
    }
}

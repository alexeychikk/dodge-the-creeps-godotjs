declare module "godot" {
    interface SceneNodes {
        "scenes/main.tscn": {
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
        },
    }
}

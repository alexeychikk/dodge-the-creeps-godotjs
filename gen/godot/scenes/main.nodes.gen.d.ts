import Player from "../../../src/Player";
import Hud from "../../../src/Hud";
declare module "godot" {
    interface SceneNodes {
        "scenes/main.tscn": {
            ColorRect: ColorRect<{}>;
            Player: Player;
            MobTimer: Timer<{}>;
            ScoreTimer: Timer<{}>;
            StartTimer: Timer<{}>;
            StartPosition: Marker2D<{}>;
            MobPath: Path2D<{
                MobSpawnLocation: PathFollow2D<{}>;
            }>;
            Hud: Hud;
            Music: AudioStreamPlayer2D<{}>;
            DeathSound: AudioStreamPlayer2D<{}>;
        };
    }
}

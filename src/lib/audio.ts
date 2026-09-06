"use client";

// Web Audio API Synthesizer for Mechanical Keyboard and Cyber Tactical SFX
// Zero external sound assets needed - 100% lightweight & instantaneous

class CyberAudioManager {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = false;
  private switchType: "rengoku" | "tactile" = "rengoku";

  constructor() {
    // AudioContext will be initialized on first user interaction to comply with browser autoplay policy
  }

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public toggleAudio(): boolean {
    this.isEnabled = !this.isEnabled;
    if (this.isEnabled) {
      this.initCtx();
      this.playBeep(880, 0.04);
    }
    return this.isEnabled;
  }

  public getStatus(): boolean {
    return this.isEnabled;
  }

  public setSwitch(type: "rengoku" | "tactile") {
    this.switchType = type;
  }

  public getSwitch(): "rengoku" | "tactile" {
    return this.switchType;
  }

  // Thocky mechanical switch sound (Rengoku Flame Edition / Linear switch)
  public playSwitchClick() {
    if (!this.isEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    if (this.switchType === "rengoku") {
      // Deep "thock" sound: low pitch drop with fast noise burst
      osc.type = "sine";
      osc.frequency.setValueAtTime(140 + Math.random() * 20, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.04);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    } else {
      // Crisp tactile mechanical click (Fantech Maxfit 61 clicky switch)
      osc.type = "triangle";
      osc.frequency.setValueAtTime(650 + Math.random() * 80, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.03);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
    }

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Tactical HUD beep (for target lock, mode switch, or success)
  public playBeep(freq: number = 750, duration: number = 0.05) {
    if (!this.isEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Alias for HUD interactions
  public playHudBeep(freq: number = 750, duration: number = 0.05) {
    this.playBeep(freq, duration);
  }
}

export const cyberAudio = new CyberAudioManager();

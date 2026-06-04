/**
 * 実績の「すごさ」を表す TIER（ランク）の定義。
 * 宝石5段階: Diamond > Platinum > Gold > Silver > Bronze
 * 配色・グラデーション・宝石の陰影をここで一元管理し、TierBadge.astro と
 * AchievementCard.astro が共通で参照する。
 */

export type Tier = 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze';

export interface TierMeta {
  id: Tier;
  /** バッジ表示用ラベル */
  label: string;
  /** 日本語の短い説明（ツールチップ用） */
  caption: string;
  /** 5(diamond) 〜 1(bronze) */
  rank: number;
  /** 代表色（枠リング・ラベル文字・グロー算出に使用） */
  accent: string;
  /** カードの枠・受賞バナー用グラデーション */
  gradient: string;
  /** 宝石(SVG)の上面ハイライト色 */
  gemHi: string;
  /** 宝石(SVG)の底面シャドウ色 */
  gemLo: string;
  /** ソフトグロー色（rgba） */
  glow: string;
  /** 受賞バナーのテキスト色 */
  text: string;
  /** 受賞バナーのテキストシャドウ */
  textShadow: string;
  /** diamond のみ true（虹色ホログラフィックを有効化） */
  holographic: boolean;
}

export const tiers: Record<Tier, TierMeta> = {
  diamond: {
    id: 'diamond',
    label: 'DIAMOND',
    caption: '優勝・日本一級',
    rank: 5,
    accent: '#38bdf8',
    gradient:
      'linear-gradient(120deg, #a5f3fc 0%, #c4b5fd 26%, #f5c2e7 50%, #bfdbfe 74%, #a7f3d0 100%)',
    gemHi: '#ecfeff',
    gemLo: '#38bdf8',
    glow: 'rgba(129, 140, 248, 0.45)',
    text: '#1e293b',
    textShadow: '0 1px 2px rgba(255, 255, 255, 0.55)',
    holographic: true,
  },
  platinum: {
    id: 'platinum',
    label: 'PLATINUM',
    caption: '準優勝・複数受賞級',
    rank: 4,
    accent: '#8593a8',
    gradient: 'linear-gradient(120deg, #f8fafc 0%, #d4dbe4 50%, #aab4c2 100%)',
    gemHi: '#ffffff',
    gemLo: '#9aa6b8',
    glow: 'rgba(148, 163, 184, 0.42)',
    text: '#1e293b',
    textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)',
    holographic: false,
  },
  gold: {
    id: 'gold',
    label: 'GOLD',
    caption: '受賞・企業賞',
    rank: 3,
    accent: '#d99413',
    gradient: 'linear-gradient(120deg, #fde9a9 0%, #f0b429 52%, #c8860b 100%)',
    gemHi: '#fff3c4',
    gemLo: '#b9770e',
    glow: 'rgba(217, 148, 19, 0.42)',
    text: '#3f2c00',
    textShadow: '0 1px 1px rgba(255, 255, 255, 0.4)',
    holographic: false,
  },
  silver: {
    id: 'silver',
    label: 'SILVER',
    caption: '決勝進出・採択・修了',
    rank: 2,
    accent: '#8b97a6',
    gradient: 'linear-gradient(120deg, #eef2f6 0%, #c3ccd6 52%, #97a3b1 100%)',
    gemHi: '#ffffff',
    gemLo: '#8c98a6',
    glow: 'rgba(148, 163, 184, 0.32)',
    text: '#283441',
    textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)',
    holographic: false,
  },
  bronze: {
    id: 'bronze',
    label: 'BRONZE',
    caption: '参加・運営・登壇',
    rank: 1,
    accent: '#b87333',
    gradient: 'linear-gradient(120deg, #d7a173 0%, #b87333 54%, #8a5022 100%)',
    gemHi: '#e9bd92',
    gemLo: '#7c4a21',
    glow: 'rgba(184, 115, 51, 0.3)',
    text: '#fdf3e7',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.45)',
    holographic: false,
  },
};

/** 指定 TIER のメタ情報を取得（未指定時は bronze にフォールバック） */
export function getTier(tier: Tier | undefined): TierMeta {
  return tiers[tier ?? 'bronze'] ?? tiers.bronze;
}

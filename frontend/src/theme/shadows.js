// ----------------------------------------------------------------------
const LIGHT_MODE = 'rgba(145, 158, 171, 0.16)';
const DARK_MODE = 'rgba(0, 0, 0, 0.24)';

export default function shadows(mode) {
  const color = mode === 'light' ? LIGHT_MODE : DARK_MODE;

  return [
    'none',
    `0px 1px 2px ${color}`,
    `0px 1px 4px ${color}`,
    `0px 1px 8px ${color}`,
    `0px 1px 12px ${color}`,
    `0px 2px 8px ${color}`,
    `0px 3px 6px ${color}`,
    `0px 4px 8px ${color}`,
    `0px 6px 12px ${color}`,
    `0px 8px 14px ${color}`,
    `0px 12px 16px ${color}`,
    `0px 14px 20px ${color}`,
    `0px 16px 24px ${color}`,
    `0px 18px 28px ${color}`,
    `0px 20px 32px ${color}`,
    `0px 22px 36px ${color}`,
    `0px 24px 40px ${color}`,
    `0px 26px 44px ${color}`,
    `0px 28px 48px ${color}`,
    `0px 30px 52px ${color}`,
    `0px 32px 56px ${color}`,
    `0px 34px 60px ${color}`,
    `0px 36px 64px ${color}`,
    `0px 38px 68px ${color}`,
    `0px 40px 72px ${color}`,
  ];
}
import type { SizeValue } from '../types/sizeValue.type';

function formatSize(value: SizeValue): string {
    if (typeof value === 'number') {
        return `${value}px`;
    }
    return value;
}

export function size(width?: SizeValue, height?: SizeValue): string {
    return `
        width: ${width ? formatSize(width) : 'auto'};
        height: ${height ? formatSize(height) : 'auto'};
    ;`
}

export function sizeMax(maxWidth?: SizeValue, maxHeight?: SizeValue): string {
    return `
        max-width: ${maxWidth ? formatSize(maxWidth) : 'none'};
        max-height: ${maxHeight ? formatSize(maxHeight) : 'none'};
    `;
}

export function sizeMin(minWidth?: SizeValue, minHeight?: SizeValue): string {
    return `
        min-width: ${minWidth ? formatSize(minWidth) : '0'};
        min-height: ${minHeight ? formatSize(minHeight) : '0'};
    `;
}
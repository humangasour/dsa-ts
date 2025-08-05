export default function debounce<T extends (...args: unknown[]) => unknown>(
    fn: T,
    delay: number
): (args: Parameters<T>) => void {
    let timerId: ReturnType<typeof setTimeout> | null = null;

    const debounce = function (this: unknown, args: Parameters<T>) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };

    return debounce;
}

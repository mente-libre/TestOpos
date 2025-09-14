export function Logo(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <span className="text-2xl font-bold" style={{ color: 'hsl(var(--primary))' }}>
                TestOpos
            </span>
        </div>
    )
}

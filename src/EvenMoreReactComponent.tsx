export interface HeadingProps {
    title: string;
}

export const Heading = ({ title }: HeadingProps) => {
    return (
        <h3>{title}</h3>
    )
}

function TestComponent() {
    return (
        <Heading title="Hello" />
    )
}

export default TestComponent;
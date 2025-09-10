//rafce
interface Props {
  text: string;
}

const Alert = ({ text }: Props) => {
  return <div className="alert alert-success">{text}</div>;
};

export default Alert;

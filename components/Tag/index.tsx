import styles from './style.module.css';

interface TagProps {
  text: string;
}

const Tag = ({
  text
}: TagProps) => {
  return (
    <span className={styles.text}>{text}</span>
  )
}

export default Tag
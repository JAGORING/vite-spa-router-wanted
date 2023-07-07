import { useRouter } from '../hooks/useRouter';

export default function About() {
  const { push } = useRouter();

  const handleClickLink = () => {
    push('/');
  };
  return (
    <>
      <h2>About</h2>
      <button type="button" onClick={handleClickLink}>
        Go Root
      </button>
    </>
  );
}

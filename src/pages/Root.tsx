import { useRouter } from '../hooks/useRouter';

export default function Root() {
  const { push } = useRouter();

  const handleClickLink = () => {
    push('/about');
  };
  return (
    <>
      <h2>Root</h2>
      <button type="button" onClick={handleClickLink}>
        Go About
      </button>
    </>
  );
}

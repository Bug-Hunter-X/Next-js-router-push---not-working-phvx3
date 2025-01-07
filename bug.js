```javascript
import {useRouter} from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
  };
  return (
    <button onClick={handleClick}>
      Go to another page
    </button>
  );
}
export default MyComponent;
```
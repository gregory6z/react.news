/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }:SubscribeButtonProps) {
  return (
    <button className={styles.subscribeButton} type="button">
      Abonnez-vous

    </button>
  );
}

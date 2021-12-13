import topTextStyles from '@/styles/topText.module.scss'

export default function TopText(){
  return(
    <>
    <div className={topTextStyles.topTextBox}>
      <span className={topTextStyles.topTextNo1}>
        <span className={topTextStyles.topTextYuor}>あなた</span>の価値を
      </span>
      <br/>
      <span className={topTextStyles.topTextNo2}>
        すべての場所に
      </span>
      <br />
      <span className={topTextStyles.topTextEn}>
        - Branding your value everywhere -
      </span>
    </div>
    </>
  );
}
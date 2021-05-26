import React, { memo, useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { allCheckItemAtom, subCheckItemsAtom } from '../../recoil/sign_up_check_box/atom'
import { SignUpChecker, Checker } from '../../styles/sign_up'

enum CheckboxType {
  ALL_CHECK,
  SUB_CHECK,
}

const CheckBox: React.FC = () => {
  const [allCheckItem, setAllCheckItem] = useRecoilState(allCheckItemAtom)
  const [subCheckItems, setSubCheckItems] = useRecoilState(subCheckItemsAtom)

  useEffect(() => {
    const trueCount = subCheckItems.filter((item) => item).length

    if (trueCount === subCheckItems.length) {
      setAllCheckItem(true)
    } else {
      setAllCheckItem(false)
    }
  }, [subCheckItems])

  const onChangeCheckbox = useCallback(
    (type: CheckboxType, itemIndex?: number) => () => {
      switch (type) {
        case CheckboxType.ALL_CHECK: {
          const allCheckResult = !allCheckItem
          setAllCheckItem(allCheckResult)
          setSubCheckItems((prevSubCheckItems) => prevSubCheckItems.map(() => allCheckResult))
          break
        }
        case CheckboxType.SUB_CHECK: {
          setSubCheckItems((prevSubCheckItems) =>
            prevSubCheckItems.map((item, index) => (index === itemIndex ? !item : item))
          )
          break
        }
      }
    },
    [allCheckItem]
  )

  return (
    <SignUpChecker>
      <Checker>
        <label htmlFor="check01">
          <span>
            <input
              type="checkbox"
              name="user-term"
              id="check01"
              checked={allCheckItem}
              onChange={onChangeCheckbox(CheckboxType.ALL_CHECK)}
            />
          </span>
          전체 약관에 동의합니다.
        </label>
      </Checker>

      <Checker>
        <label htmlFor="check02">
          <span>
            <input
              type="checkbox"
              name="user-term"
              id="check02"
              checked={subCheckItems[0]}
              onChange={onChangeCheckbox(CheckboxType.SUB_CHECK, 0)}
            />
          </span>
          만 14세 이상입니다.
        </label>
      </Checker>

      <Checker>
        <label htmlFor="check03">
          <span>
            <input
              type="checkbox"
              name="user-term"
              id="check03"
              checked={subCheckItems[1]}
              onChange={onChangeCheckbox(CheckboxType.SUB_CHECK, 1)}
            />
          </span>
          <strong>믹챠 서비스 이용약관</strong>에 동의합니다 (필수)
        </label>
      </Checker>

      <Checker>
        <label htmlFor="check04">
          <span>
            <input
              type="checkbox"
              name="user-term"
              id="check04"
              checked={subCheckItems[2]}
              onChange={onChangeCheckbox(CheckboxType.SUB_CHECK, 2)}
            />
          </span>
          <strong>개인정보 수집 및 이용에 대한 안내</strong>에 동의합니다 (필수)
        </label>
      </Checker>

      <Checker>
        <label htmlFor="check05">
          <span>
            <input
              type="checkbox"
              name="user-term"
              id="check05"
              checked={subCheckItems[3]}
              onChange={onChangeCheckbox(CheckboxType.SUB_CHECK, 3)}
            />
          </span>
          <strong>신작 알림 이벤트 정보 수신</strong>에 동의합니다 (선택)
        </label>
      </Checker>
    </SignUpChecker>
  )
}

export default memo(CheckBox)

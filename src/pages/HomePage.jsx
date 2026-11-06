import { Atlas } from '@/features/home/Atlas'
import { Hour } from '@/features/home/Hour'
import { House } from '@/features/home/House'
import { Invitation } from '@/features/home/Invitation'
import { Manuscript, Purpose } from '@/features/home/Manuscript'
import { OjasBand } from '@/features/home/OjasBand'
import { Portal } from '@/features/home/Portal'
import { Practice } from '@/features/home/Practice'
import { Threshold } from '@/features/home/Threshold'

export function HomePage() {
  return (
    <>
      <Portal />
      <Manuscript />
      <Purpose />
      <Practice />
      <Hour />
      <House />
      <OjasBand />
      <Atlas />
      <Invitation />
      <Threshold />
    </>
  )
}

import { Heading } from "native-base"

type TitleDateProps = {
  date: string
}

export const TitleDate = ({ date }: TitleDateProps ) => {
  return (
    <Heading fontFamily="heading" fontSize="md" color="gray.700">
      {date}
    </Heading>
  )
}
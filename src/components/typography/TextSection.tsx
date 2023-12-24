

// COMPONENTS
import { Box } from '@mui/material';
import { Heading, Subheading, Paragraph } from '@components/typography'
import { AlignEnum } from '../../@types/TypographyProps';


type TextSectionProps = {
  data: {
    heading: string,
    paragraphs: string[]
  }
}


// TODO
// I'd like to make this component handle another layer of object nesting so that it handles one Heading with zero or more Subheadings, each with one or more Paragraphs.

export default function TextSection(props: TextSectionProps) {
  const { heading, subheadings, paragraphs } = props.data
  return (
    <Box paddingBottom={2} >
      <Heading text={heading} align={AlignEnum.left} />
      <Subheading text={heading} align={AlignEnum.left} />
      {
        paragraphs.map((paragraph, index) => (
          <Paragraph text={paragraph} key={index} />
          // {
          //   paragraphs.map((paragraph, index) => (
          //     <Paragraph text={paragraph} key={index} />
          //   ))
          // }
        ))
      }
    </Box>
  )
}
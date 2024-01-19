

// COMPONENTS
import { Box } from '@mui/material';
import { Heading, Paragraph } from '@components/typography'
import { AlignEnum } from '../../@types/TypographyProps';

// TYPES
import { TextSectionProps } from '@/@types/TextSection';

// TODO
// I'd like to make this component handle another layer of object nesting so that it handles one Heading with zero or more Subheadings, each with one or more Paragraphs.

export default function TextSection(props: TextSectionProps) {
  const { data, spaceParagraphs = true } = props
  const { heading, paragraphs } = data
  return (
    <Box paddingBottom={2} >
      <Heading text={heading} align={AlignEnum.left} />
      {
        paragraphs.map((paragraph: string, index) => (
          <Paragraph text={paragraph} key={index} gutterBottom={spaceParagraphs} />
        ))
      }
    </Box>
  )
}
import React from 'react';
import { ListHeader } from '../../list-item/list-header';

  export const RenderFeedHeader = ({ section }: any) => {
    return <ListHeader>{section.title}</ListHeader>;
  };

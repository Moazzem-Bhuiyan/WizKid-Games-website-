"use client";
import { Flex, Skeleton } from 'antd';

const styles = {
  avatar: {
    border: '1px solid #aaa',
  },
  title: {
    border: '1px solid #aaa',
  },
};

const SkeletonForTable = () => {
  return (
    <Flex gap="medium">
      <Skeleton  styles={styles} avatar paragraph={false} />
    </Flex>
  );
};
export default SkeletonForTable;